import { toast } from "react-toastify";
import { Patient } from "../types";
import PatientDetailsItem from "./PatientDetailsItem";
import { usePatientStore } from "../store/store";

type PatientDetailProps = {
  patient: Patient;
};

export default function PatientDetails({ patient }: PatientDetailProps) {
  const handleClickDelete = () => {
    deletePatient(patient.id);
    toast("Paciente eliminado", { type: "error" });
  };

  // usePatientStore((state)=>state.deletePatient)
  const { deletePatient, getPatientById } = usePatientStore();

  return (
    <div className="mx-5 my-10 px-5 py-10 bg-white shadow-md rounded-md">
      <PatientDetailsItem label="ID" data={patient.id} />
      <PatientDetailsItem label="Nombre" data={patient.name} />
      <PatientDetailsItem label="Propietario" data={patient.ownerName} />
      <PatientDetailsItem label="Email" data={patient.email} />
      <PatientDetailsItem label="Fecha Alta" data={patient.date.toString()} />
      <PatientDetailsItem label="Síntomas" data={patient.symptoms} />
      <div className="flex flex-col lg:flex-row justify-around mt-10 gap-3">
        <button
          onClick={() => getPatientById(patient.id)}
          type="button"
          className="py-2 px-10 bg-indigo-500 hover:bg-indigo-700 text-white uppercase rounded-md"
        >
          Editar
        </button>
        <button
          onClick={() => handleClickDelete()}
          type="button"
          className="py-2 px-10 bg-red-500 hover:bg-red-700 text-white uppercase rounded-md"
        >
          Borrar
        </button>
      </div>
    </div>
  );
}
