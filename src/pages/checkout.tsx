import { useContext, useState } from "react";

import { useNavigate } from "react-router-dom";

import { CartContext } from "../contexts/cartContext";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";

import {
  PiCurrencyDollar,
  PiMapPinLine,
  PiCreditCard,
  PiBank,
  PiMoney,
} from "react-icons/pi";
import { FiAlertTriangle } from "react-icons/fi";

import { Button } from "../components/button";
import { CoffeeCardCheckout } from "../components/coffeeCardCheckout";
import { Input } from "../components/input";

const orderFormSchema = z.object({
  cep: z.string().min(8, { message: "Insira um CEP válido" }),
  street: z.string().min(1, { message: "Insira o nome da rua" }),
  address_number: z
    .string()
    .min(1, { message: "Insira o número do seu endereço" }),
  complement: z.string().optional(),
  neighborhood: z.string().min(1, { message: "Insira o nome do bairro" }),
  city: z.string().min(1, { message: "Insira o nome da cidade" }),
  uf: z
    .string()
    .min(2, { message: "Insira a UF" })
    .max(2, { message: "UF deve ter no máximo 2 caracteres" }),
});

interface OrderFormData {
  cep: string;
  street: string;
  address_number: string;
  complement?: string;
  neighborhood: string;
  city: string;
  uf: string;
}

export function Checkout() {
  const { coffeesAmount, coffeesOnCart } = useContext(CartContext);
  const [paymentMethod, setPaymentMethod] = useState("");

  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<OrderFormData>({
    resolver: zodResolver(orderFormSchema),
  });

  const itemsTotalPrice = coffeesOnCart.reduce((total, coffee) => {
    const coffeeTotalPrice =
      parseFloat(coffee.price.replace(",", ".")) * coffee.quantity;
    return total + coffeeTotalPrice;
  }, 0);

  const deliveryCost = 3.5;
  const cartTotalPrice = itemsTotalPrice + deliveryCost;

  function handlePaymentMethodChange(method: string) {
    setPaymentMethod(method);
  }

  function handleSubmitForm(data: OrderFormData) {
    if (paymentMethod === "") {
      alert("Por favor, selecione um método de pagamento.");
      return;
    }

    localStorage.setItem(
      "orderData",
      JSON.stringify({
        data,
        paymentMethod,
        coffeesOnCart,
        itemsTotalPrice,
        deliveryCost,
        cartTotalPrice,
      })
    );

    navigate("/success");
  }

  return (
    <div className="w-[70rem] mx-auto px-4">
      <main className="flex justify-between gap-8 mt-10">
        <form
          onSubmit={handleSubmit(handleSubmitForm)}
          className="flex justify-between gap-8 mt-10"
        >
          <div className="flex flex-col gap-4">
            <h2 className="font-baloo font-bold text-lg text-black">
              Complete seu pedido
            </h2>

            <div className="flex flex-col gap-3">
              <div className="w-[40rem] p-10 flex flex-col gap-8 bg-zinc-100 rounded-md">
                <div className="flex gap-2">
                  <PiMapPinLine size={22} className="text-yellow-600" />
                  <div>
                    <p className="font-medium">Endereço de entrega</p>
                    <p className="text-sm">
                      Informe o endereço onde deseja receber seu pedido
                    </p>
                  </div>
                </div>

                <div className="flex flex-col gap-4">
                  <div>
                    <Input
                      placeholder="CEP"
                      {...register("cep")}
                      error={errors.cep?.message as string}
                    />
                  </div>
                  <Input
                    placeholder="Rua"
                    {...register("street")}
                    error={errors.street?.message as string}
                  />

                  <div className="flex gap-4">
                    <Input
                      placeholder="Número"
                      {...register("address_number")}
                      error={errors.address_number?.message as string}
                    />
                    <div className="flex flex-1 h-[42px]">
                      <Input
                        id="complement"
                        placeholder="Complemento"
                        className="border-r-0 rounded-r-none w-full h-full"
                        {...register("complement")}
                      />
                      <label
                        htmlFor="complement"
                        className="p-3 h-full flex items-center justify-center rounded-r-sm bg-zinc-200/20 border border-l-0 border-zinc-300/50"
                      >
                        <span className="italic text-zinc-500/80 text-sm max-h-4">
                          Opcional
                        </span>
                      </label>
                    </div>
                  </div>

                  <div className="flex gap-4">
                    <Input
                      placeholder="Bairro"
                      {...register("neighborhood")}
                      error={errors.neighborhood?.message as string}
                    />
                    <Input
                      placeholder="Cidade"
                      className="flex-1"
                      {...register("city")}
                      error={errors.city?.message as string}
                    />
                    <Input
                      placeholder="UF"
                      className="w-14"
                      maxLength={2}
                      {...register("uf")}
                      error={errors.uf?.message as string}
                    />
                  </div>
                </div>
              </div>

              <div className="w-[40rem] p-10 flex flex-col gap-8 bg-zinc-100 rounded-md">
                <div className="flex gap-2">
                  <PiCurrencyDollar size={22} className="text-purple-700" />
                  <div>
                    <p className="font-medium">Pagamento</p>
                    <p className="text-sm">
                      O pagamento é feito na entrega. Escolha a forma que deseja
                      pagar
                    </p>
                  </div>
                </div>

                <div className="flex gap-3">
                  <Button
                    onClick={() => handlePaymentMethodChange("credit")}
                    selected={paymentMethod === "credit"}
                    type="button"
                  >
                    <PiCreditCard size={17} className="text-purple-600" />
                    <span>Cartão de crédito</span>
                  </Button>

                  <Button
                    onClick={() => handlePaymentMethodChange("debit")}
                    selected={paymentMethod === "debit"}
                    type="button"
                  >
                    <PiBank size={17} className="text-purple-600" />
                    <span>Cartão de débito</span>
                  </Button>

                  <Button
                    onClick={() => handlePaymentMethodChange("money")}
                    selected={paymentMethod === "money"}
                    type="button"
                  >
                    <PiMoney size={17} className="text-purple-600" />
                    <span>Dinheiro</span>
                  </Button>
                </div>
              </div>
            </div>
          </div>

          <div className="flex flex-col gap-4 ">
            <h2 className="font-baloo font-bold text-lg text-black">
              Cafés selecionados ({coffeesAmount})
            </h2>

            <div className="w-[28rem] p-10 bg-zinc-100 rounded-lg rounded-tr-[2.5rem] rounded-bl-[2.5rem]">
              <div className="flex flex-col gap-6">
                <div className="flex flex-col gap-6">
                  {coffeesAmount === 0 ? (
                    <div className="flex flex-col gap-2 items-center justify-center">
                      <FiAlertTriangle size={40} className="text-yellow-500" />

                      <span className="font-semibold">
                        Ainda não há produtos no seu pedido
                      </span>
                    </div>
                  ) : (
                    coffeesOnCart.map((coffee) => (
                      <CoffeeCardCheckout key={coffee.id} {...coffee} />
                    ))
                  )}
                </div>

                <div className="flex flex-col gap-3">
                  <div className="flex justify-between text-sm">
                    <span>Total dos itens</span>
                    <span>R$ {itemsTotalPrice.toFixed(2)}</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span>Entrega</span>
                    <span>R$ {deliveryCost.toFixed(2)}</span>
                  </div>
                  <div className="flex justify-between font-bold text-lg text-black">
                    <span>Total</span>
                    <span>R$ {cartTotalPrice.toFixed(2)}</span>
                  </div>
                </div>

                <button
                  className="p-4 w-full flex items-center justify-center rounded-md bg-yellow-500 text-sm text-white font-medium uppercase hover:bg-yellow-500/70 transition"
                  disabled={!coffeesAmount}
                  type="submit"
                >
                  Confirmar pedido
                </button>
              </div>
            </div>
          </div>
        </form>
      </main>
    </div>
  );
}
