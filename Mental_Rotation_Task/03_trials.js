// In this file you can specify the trial data for your experiment


const trial_info = {
    forced_choice: [
        {
            question: "What's on the bread?",
            picture: "images/question_mark_02.png",
            option1: 'jam',
            option2: 'ham'
        },
        {
            question: "What's the weather like?",
            picture: "images/weather.jpg",
            option1: "shiny",
            option2: "rainbow"
        }
    ]
};


// initialize key press views
const key_press_trials = {
  key_press_choice:[
      {
        question: "Are these two figures the same or different?",
        picture: 'images/1_50_different.jpg',
        key1: 'f',
        key2: 'j',
        f: 'same',
        j: 'different',
        expected: 'different',
        angle: '50'
      },
      {
        question: "Are these two figures the same or different?",
        picture: 'images/1_50_same.jpg',
        key1: 'f',
        key2: 'j',
        f: 'same',
        j: 'different',
        expected: 'same',
        angle: '50'
      },
      {
        question: "Are these two figures the same or different?",
        picture: 'images/1_150_different.jpg',
        key1: 'f',
        key2: 'j',
        f: 'same',
        j: 'different',
        expected: 'different',
        angle: '150'
      },
      {
        question: "Are these two figures the same or different?",
        picture: 'images/1_150_same.jpg',
        key1: 'f',
        key2: 'j',
        f: 'same',
        j: 'different',
        expected: 'same',
        angle: '150'
      },
      {
        question: "Are these two figures the same or different?",
        picture: 'images/2_50_same.jpg',
        key1: 'f',
        key2: 'j',
        f: 'same',
        j: 'different',
        expected: 'same',
        angle: '50'
      }
  ]

};
