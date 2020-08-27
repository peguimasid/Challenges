const question = {
  question_info: {
    0: {
      text: "Você está na emergência..."
    }
  },
  answer_list: {
    0: {
      text: "Colehr swab jdshdjsk..."
    },
    1: {
      text: "Colehr swab.skkasa.."
    },
    2: {
      text: "Colehr swab.saoskal;sa.."
    },
    3: {
      text: "Colehr swab.dxctfvyg.."
    },
    4: {
      text: "Colehr swabyvgu..."
    }
  }
}

const  insertField =  (object, keys) => {
  keys.forEach(key => {
      if (typeof object[key] === 'object') {
          const newKeys = Object.keys(object[key]);
          object[key] = insertField(object[key], newKeys);
      }
      else {
        object !== undefined
          ? (object = {
            text: object['text'],
            marked_how_many_times: 0
          }) : null;
      }
  });
  return object;
};
const test = insertField(question, ['question_info', 'answer_list']);



