$(document).ready(function(){
	$(data_main).ready(function(){
		const share_data = {
			title: data_main.quote,
			text: "새벽별 드림",
			url: url
		}
		$button_share = $('#button_share');
		$button_share.on('click', async () => {
			console.log("share button pressed");
			try {
				await navigator.share(share_data);
				console.log('shared');
			}
			catch(err) {
				console.log('failed to share');
			}
		});
	});
});
