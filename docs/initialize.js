const url = new URL(window.location.href);
const name = url.searchParams.get('card');
const category = name.split('-')[0];
const category_kr_none = "비슷한";
var page_title = "새벽별";
var category_kr = category_kr_none;

var data_all;
var data_main;
var data_f_cat;
var data_f_style;

/* read csv data */
$.get("./src/contentdata.csv", function(CSVdata) {
  /* extract data */
  data_all = $.csv.toObjects(CSVdata);
  data_main = data_all.find(x => x.name === name);
  data_f_cat = data_all.filter(x => x.category == category);
  data_f_style = data_all.filter(x => x.category == category && x.style == data_main.style);

  /* update opengraph metadata */
  if(data_main != null) {
    page_title = data_main.quote + " - " + page_title + " 드림";
    document.title = page_title;
    $('meta[property="og:title"]').attr('content', data_main.quote);
    $('meta[property="og:description"]').attr('content', "새벽별 드림");
    $('meta[property="og:url"]').attr('content', url);
    $('meta[property="og:image"]').attr('content', data_main.source);
    switch (category) {
      case 'newyear':
        category_kr = "새해인사";
        break;
      case 'christianity':
        category_kr = "성경구절";
        break;
      case 'thankyou':
        category_kr = "감사";
        break;
      case 'optimism':
        category_kr = "긍정";
        break;
    }
  }
});
