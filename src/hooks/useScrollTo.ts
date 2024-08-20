const useScrollTo = () => {
  const scrollTo = (element_id: string) => {
    const element = document.getElementById(element_id)?.offsetTop;

    window?.scrollTo({
      top: (element || 0) - 50,
      behavior: "smooth",
    });
  };

  return scrollTo;
};

export default useScrollTo;
