import * as functions from "./modules/functions.js";
functions.isWebp();

"use strict"

document.addEventListener('DOMContentLoaded', function () {
	
	var modalElem = document.getElementById('modal');
	var overlay = document.getElementById('overlay');
	var closebutton = document.getElementById('close');

	overlay.onclick = function(){
		overlay.classList.remove('_active');
		modalElem.classList.remove('_active');
	}
	closebutton.onclick = function(){
		overlay.classList.remove('_active');
		modalElem.classList.remove('_active');
	}

	const form = document.getElementById('form');
	form.addEventListener('submit', formSend);

	async function formSend(e) {
		e.preventDefault();

		let error = formValidate(form);

		let formData = new FormData(form);
		if (error === 0) {
			form.classList.add('_sending');
			let response = await fetch('sendmail.php', {
				method: 'POST',
				body: formData
			});
			if (response.ok) {
				let result = await response.json();
				modalElem.classList.add('_active');
        		overlay.classList.add('_active');
				form.reset();
			} else {
				alert('Ошибка отправки сообщения');
			}
		} else {
			alert('Не все поля заполнены');
		}

	}


	function formValidate(form) {
		let error = 0;
		let formReq = document.querySelectorAll('._req');

		for (let index = 0; index < formReq.length; index++) {
			const input = formReq[index];
			formRemoveError(input);

			if (input.classList.contains('_email')) {
				if (emailTest(input)) {
					formAddError(input);
					error++;
				}
			} else if (input.getAttribute("type") === "checkbox" && input.checked === false) {
				formAddError(input);
				error++;
			} else {
				if (input.value === '') {
					formAddError(input);
					error++;
				}
			}
		}
		return error;
	}
	function formAddError(input) {
		input.parentElement.classList.add('_error');
		input.classList.add('_error');
	}
	function formRemoveError(input) {
		input.parentElement.classList.remove('_error');
		input.classList.remove('_error');
	}


	//test
	function emailTest(input) {
		return !/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,8})+$/.test(input.value);
	}


});
