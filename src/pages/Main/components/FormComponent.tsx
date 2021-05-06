import { useEffect, useRef, useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";

type Estados = {
  sigla: string;
  nome: string;
};
type Inputs = {
  crm: number;
  uf: string;
};

export function FormComponent() {
  const [estados, setEstados] = useState<Estados[]>([]);
  const [sucesso, setSucesso] = useState<Boolean>(false);
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm<Inputs>();
  const onSubmit: SubmitHandler<Inputs> = (data) => {
    setSucesso(true);
  };

  useEffect(() => {
    fetch("https://servicodados.ibge.gov.br/api/v1/localidades/estados").then(
      (response) =>
        response.json().then((data) =>
          //Estados em ordem alfabética
          setEstados(
            data.sort((a: Estados, b: Estados) =>
              a.nome < b.nome ? -1 : a.nome === b.nome ? 0 : 1
            )
          )
        )
    );
  }, []);

  return (
    <main>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="form">
          <span className="staticText">CRM</span>
          <input
            {...register("crm", { required: true, minLength: 5 })}
            type="number"
            className="inputText"
            name="crm"
            placeholder="0000000"
          />
        </div>
        <div className="errorText">
          {errors.crm?.type === "required" && "Campo Obrigatório"}
          {errors.crm?.type === "minLength" &&
            "Digite um CRM com 5 dígitos ou mais"}
        </div>
        <div className="form">
          <span className="staticText">UF</span>
          <select
            {...register("uf", { required: true })}
            defaultValue=""
            name="uf"
            className="inputText"
          >
            <option hidden value="">
              Selecionar
            </option>
            {estados.map((estado) => {
              return (
                <option key={estado.sigla} value={estado.sigla}>
                  {estado.nome}
                </option>
              );
            })}
          </select>
          
        </div>
        <div className="errorText">
            {errors.uf?.type === "required" && "Selecione um estado"}
          </div>
        <button type="submit">Continue</button>

        <div className="aboutText">
          <span>
            Canal de compra exclusivo
            <br />
            para classe médica
          </span>

          <div className="successText">{sucesso && "Sucesso"}</div>
        </div>
      </form>
    </main>
  );
}
