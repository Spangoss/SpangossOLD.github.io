var popoverTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="popover"]'))
var popoverList = popoverTriggerList.map(function (popoverTriggerEl) {
	return new bootstrap.Popover(popoverTriggerEl)
})

var tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'))
var tooltipList = tooltipTriggerList.map(function (tooltipTriggerEl) {
	return new bootstrap.Tooltip(tooltipTriggerEl, {
		container: 'body'
	})
})

// Fix positioning of Popper on Guild Rank Icon
var guildMasterEl = document.getElementById('guild-master-icon')
var gmTooltip = new bootstrap.Tooltip(guildMasterEl, {
	container: 'i'
})

// Fix positioning of Popper on Guild Rank Icon
var raidLeaderEl = document.getElementById('raid-leader-icon')
var rlTooltip = new bootstrap.Tooltip(raidLeaderEl, {
	container: 'i'
})
