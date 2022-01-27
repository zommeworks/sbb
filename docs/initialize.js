const url = new URL(window.location.href);
const name = url.searchParams.get('card');
const category = name.split('-')[0];
const category_kr_none = "비슷한";
var page_title = "새벽별";
var category_kr = category_kr_none;

switch (category) {
  case 'newyear':
    page_title = "새해 복 많이 받으세요! - " + page_title;
    category_kr = "새해인사";
    break;
  case 'christianity':
    page_title = "주님 말씀 전합니다. - " + page_title;
    category_kr = "성경구절";
    break;
  case 'thankyou':
    page_title = "정말 감사합니다! - " + page_title;
    category_kr = "감사";
    break;
  case 'optimism':
    page_title = "일상에 아름다움을 더할 글귀 하나 올립니다. - " + page_title;
    category_kr = "긍정";
    break;
}

document.title = page_title;
console.log(page_title);
