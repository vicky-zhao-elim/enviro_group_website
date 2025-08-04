const article_text = document.getElementsByTagName("article")[0].getElementsByTagName("p");
const range_input = document.getElementById("range-input");
const number_input = document.getElementById("number-input");

//Put the corresponding words you want to swap out below. Example shown.
const difficult_change_easy = [
  'nature', 
]

const difficult_change_hard = [
  'environment', 
]

function change_font_size(input_value){
  let target_size;

  if(input_value == 'range'){
    target_size = range_input.value;
    number_input.value = target_size;
  }
  else if(input_value == 'number'){
    target_size = number_input.value;
    range_input.value = target_size;
  }
  else{
    target_size = input_value;
    number_input.value = target_size;
    range_input.value = target_size;
  }
  
  for(let i = 0; i < article_text.length; i++){
    article_text[i].style.fontSize = target_size + "px";
  }

}

function change_text_difficulty(difficulty){
  for(let i = 0; i < article_text.length; i++){
    let cur_paragraph = article_text[i].innerHTML;
    for(let j = 0; j < difficult_change_easy.length; j++){
      if(difficulty == 'easy'){
        article_text[i].innerHTML = cur_paragraph.replace(difficult_change_hard[j], difficult_change_easy[j]);
      }
      else{
        article_text[i].innerHTML = cur_paragraph.replace(difficult_change_easy[j], difficult_change_hard[j]);
      }
    }
  }
}

