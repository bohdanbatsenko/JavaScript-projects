const paginate = (data) => {
	const itemsPerPage = 8;
	const numberOfPages = Math.ceil(data.length / itemsPerPage);
	const paginatedData = Array.from({length:numberOfPages},(_,index)=>{
		const start = index * itemsPerPage;
		return data.slice(start,start +itemsPerPage);
	})
	return paginatedData;
}

export default paginate;