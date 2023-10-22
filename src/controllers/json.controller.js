export const getNames = async (req, res) => {
  const names = {
    joe: {
      name: "Joe",
      edad: 22,
      profeion: "programador",
    },
    alberto: {
      name: "alberto",
      edad: 21,
      profeion: "fiestero",
    },
    andres: {
      name: "andres",
      edad: 21,
      profeion: "DJ",
    },
  };

  res.json(names);
};
