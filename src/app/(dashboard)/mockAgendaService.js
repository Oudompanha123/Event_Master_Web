const mockAgendaService = async () => {
    return {
      payload: [
        {
          topic: "Get Up Lorem ipsum dolor sit amet consectetur, adipisicing elit.",
          endTime: "14:00",
          speaker: "Menglim",
          startTime: "9:00",
          description: "Get up lorem10 ",
        },
        {
          topic: "Song",
          endTime: "11:00",
          speaker: "Dara",
          startTime: "19:00",
          description: "new song in korea Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolorum minus voluptas quaerat eveniet dolores ea quod, eos iusto odio quas doloribus soluta esse eaque molestias. Adipisci at minus commodi illo.",
        },
        {
          topic: "Song",
          endTime: "11:00",
          speaker: "Dara",
          startTime: "9:00",
          description: "",
        },
        {
          topic: "Song",
          endTime: "11:00",
          speaker: "",
          startTime: "9:00",
          description: "new song in korea",
        },
        {
          topic: "Get Up",
          endTime: "14:00",
          speaker: "",
          startTime: "9:00",
          description: "",
        },
      ],
    };
  };
  
  export default mockAgendaService;
  