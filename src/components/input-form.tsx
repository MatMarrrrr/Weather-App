import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import axios from "axios";

interface CityFormData {
  city: string;
}

interface GeoResponse {
  data: GeoData[];
}

interface GeoData {
  lat: number;
  lon: number;
}

const formSchema = yup.object().shape({
  city: yup.string().required("You must add a city first"),
});

function InputForm() {
  const apiKey: string = "58386f423a9e7da5fd328c42985fc43e";

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<CityFormData>({
    resolver: yupResolver(formSchema),
  });

  const onSubmit = async (data: CityFormData) => {
  
  };

  return (
    <form className="weatherForm" onSubmit={handleSubmit(onSubmit)}>
      <input placeholder="Enter city" {...register("city")} />
      {errors.city && <p>{errors.city.message}</p>}
      <input type="submit" value="Check Weather" />
    </form>
  );
}

export default InputForm;
