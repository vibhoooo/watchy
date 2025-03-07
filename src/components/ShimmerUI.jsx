const ShimmerUI = () => {
	const arr = [1, 2, 3, 4, 5];
	const arr2 = [1];

	return (
		<div className="absolute bg-black top-150 border-black border rounded-xl left-10 right-10 opacity-95">
			{
				arr.map((e, index) => {
					return (
						<div key={index} className="flex">
							{
								arr2.map((e2, index2) => {
									return (
										<div key={index2}> 
											<div className="p-1 m-1 w-60 h-10 rounded-xl border border-black bg-gray-500"></div>
											<div className="p-1 m-1 w-60 h-80 rounded-xl border border-black bg-gray-500"></div>
										</div>
									)
								})
							}
						</div>
					);
				})
			}
		</div>
	);
};

export default ShimmerUI;