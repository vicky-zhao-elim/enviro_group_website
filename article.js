const article_text = document.getElementsByTagName("article")[0].getElementsByTagName("p");
const range_input = document.getElementById("range-input");
const number_input = document.getElementById("number-input");

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
  
  for(let i = 0; i < article_text.length; i++){
    article_text[i].style.fontSize = target_size + "px";
  }

  document.cookie = "font-size=" + target_size+"px"
  //make it update while scrolling?

}

function change_text_difficulty(change_to){
  //?????
}

if(document.cookie == ""){
  document.cookie = "font-size=16px";
}
else{
  let size = "";
  for(let i = 0; i < 3; i++){
    size += document.cookie[i + 11];
  }
  change_font_size(size);
}
