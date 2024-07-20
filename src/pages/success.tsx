import {
  PiCurrencyDollarBold,
  PiMapPinFill,
  PiTimerFill,
} from "react-icons/pi";

import successImg from "../../public/success-image.png";

interface OrderData {
  data: {
    cep: string;
    street: string;
    address_number: string;
    complement?: string;
    neighborhood: string;
    city: string;
    uf: string;
  };
  paymentMethod: string;
}

export function Success() {
  const orderDataString = localStorage.getItem("orderData");
  const orderData: OrderData | null = orderDataString
    ? JSON.parse(orderDataString)
    : null;
  const { data, paymentMethod } = orderData || {};

  return (
    <div className="w-[70rem] mx-auto px-4">
      <main className="mt-24 flex flex-col gap-10">
        <div>
          <h1 className="text-3xl text-yellow-600 font-baloo font-bold">
            Uhu! Pedido confirmado
          </h1>
          <p className="text-lg font-medium">
            Agora é só aguardar que logo seu café chegará até você
          </p>
        </div>

        <div className="flex justify-between">
          <div className="p-10 w-[33rem] bg-zinc-50 rounded-lg rounded-tr-[2.5rem] rounded-bl-[2.5rem] border border-purple-700">
            <div className="flex flex-col gap-8">
              <div className="flex items-center gap-3">
                <div className="bg-purple-600 p-2 rounded-full">
                  <PiMapPinFill className="text-white" />
                </div>
                <p>
                  Entrega em{" "}
                  <span className="font-bold">
                    {data?.street}, {data?.address_number},
                  </span>{" "}
                  {data?.neighborhood} - {data?.city}, {data?.uf}
                </p>
              </div>

              <div className="flex items-center gap-3">
                <div className="bg-yellow-500 p-2 rounded-full">
                  <PiTimerFill className="text-white" />
                </div>
                <p>
                  Previsão de entrega <br />
                  <span className="font-bold">20 min - 30 min</span>
                </p>
              </div>

              <div className="flex items-center gap-3">
                <div className="bg-yellow-600 p-2 rounded-full">
                  <PiCurrencyDollarBold className="text-white" />
                </div>
                <p>
                  Pagamento na entrega <br />
                  <span className="font-bold">
                    {paymentMethod === "credit"
                      ? "Cartão de crédito"
                      : paymentMethod === "debit"
                      ? "Cartão de débito"
                      : "Dinheiro"}
                  </span>
                </p>
              </div>
            </div>
          </div>

          <div>
            <img src={successImg} alt="" />
          </div>
        </div>
      </main>
    </div>
  );
}
