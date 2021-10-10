type FormValues = {
  search: string;
};

export const useHeaderSearch = () => {
  const onSubmit = ({ search }: FormValues) => {
    console.log(search);
  };

  return {
    onSubmit,
  };
};
