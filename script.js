const boxs = document.querySelectorAll(".box")
const btnAllRead = document.querySelector(".header__all-read")
const amountUnread = document.querySelector(".header__box-amount")

let amount = amountUnread.textContent

function markAsRead(box) {
	box.classList.remove("box--unread")
	amountUnread.textContent = 0
}
function markAllAsRead() {
	boxs.forEach(box => {
		box.classList.remove("box--unread")
	})
	amountUnread.textContent = 0
}

boxs.forEach(box => {
	box.addEventListener("click", () => {
		if (box.classList.contains("box--unread")) {
			box.classList.remove("box--unread")
			amount--
			amountUnread.textContent = amount
		}
	})
})

btnAllRead.addEventListener("click", markAllAsRead)
