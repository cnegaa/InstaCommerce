document.querySelector('.summary__conditions__toggler').addEventListener('click', () => {
	const summaryCollapse = document.getElementById('summaryConditionsList')
	const bsCollapse = new bootstrap.Collapse(summaryCollapse, {toggle: false})
	bsCollapse.toggle()
})
