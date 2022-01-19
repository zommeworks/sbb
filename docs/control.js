const share_data = {
	title: '욥기 23:10 [4]',
	text: '하나님은 내가 가는 길을 다 알고 계십니다.',
	url: 'https://zommeworks.github.io/sbb/index.html'
}

const button_share = document.querySelector('#button_share');
const count_share = document.querySelector('#count_share');

  // Share must be triggered by "user activation"
  button_share.addEventListener('click', async () => {
  	console.log('button clicked');
    try {
      await navigator.share(share_data);
      count_share.textContent += 1;
      console.log('shared');
    } catch(err) {
      count_share.textContent = 'Error: ' + err;
      console.log('share error');
    }
  });