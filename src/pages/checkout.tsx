import { useContext } from "react";
import { CartContext } from "../contexts/cartContext";

import { CoffeeOnCart } from "../app";

import {
  PiCurrencyDollar,
  PiMapPinLine,
  PiCreditCard,
  PiBank,
  PiMoney,
} from "react-icons/pi";

import { Button } from "../components/button";
import { CoffeeCardCheckout } from "../components/coffeeCardCheckout";
import { Input } from "../components/input";

export function Checkout() {
  const { coffeesAmount, coffeesOnCart } = useContext(CartContext);

  const itemsTotalPrice = coffeesOnCart.reduce(
    (total: number, coffee: { price: string; quantity: number }) => {
      const coffeeTotalPrice =
        parseFloat(coffee.price.replace(",", ".")) * coffee.quantity;
      return total + coffeeTotalPrice;
    },
    0
  );

  const deliveryCost = 3.5;

  const cartTotalPrice = itemsTotalPrice + deliveryCost;

  return (
    <div className="w-[70rem] mx-auto px-4">
      <main className="flex justify-between gap-8 mt-10">
        <div className="flex flex-col gap-4">
          <h2 className="font-baloo font-bold text-lg text-black">
            Complete seu pedido
          </h2>

          <div className="flex flex-col gap-3 ">
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

              <form className="flex flex-col gap-4">
                <div>
                  <Input placeholder="CEP" />
                </div>

                <Input placeholder="Rua" />

                <div className="flex gap-4">
                  <Input placeholder="Número" />

                  <div className="flex flex-1">
                    <Input
                      id="complement"
                      placeholder="Complemento"
                      className="border-r-0 w-full"
                    />
                    <label
                      htmlFor="complement"
                      className="p-3 flex items-center justify-center rounded-r-sm bg-zinc-200/30 border border-l-0 border-zinc-300/50 "
                    >
                      <span className="italic text-zinc-500/80 text-sm">
                        Opcional
                      </span>
                    </label>
                  </div>
                </div>

                <div className="flex gap-4">
                  <Input placeholder="Bairro" />

                  <Input placeholder="Cidade" className="flex-1" />

                  <Input placeholder="UF" className="w-14" maxLength={2} />
                </div>
              </form>
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
                <Button className="bg-zinc-200 ">
                  <PiCreditCard size={17} className="text-purple-600" />
                  <span>Cartão de crédito</span>
                </Button>

                <Button className="bg-zinc-200 ">
                  <PiBank size={17} className="text-purple-600" />
                  <span>Cartão de débito</span>
                </Button>

                <Button className="bg-zinc-200 ">
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
                {coffeesOnCart.map((coffee: CoffeeOnCart) => (
                  <CoffeeCardCheckout
                    key={coffee.id}
                    id={coffee.id}
                    imgUrl={coffee.imgUrl}
                    title={coffee.title}
                    price={coffee.price}
                  />
                ))}
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
                disabled={!coffeesAmount}
                className="p-4 w-full flex items-center justify-center rounded-md bg-yellow-500 text-sm text-white font-medium uppercase hover:bg-yellow-500/70 transition disabled:cursor-not-allowed"
              >
                Confirmar pedido
              </button>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
