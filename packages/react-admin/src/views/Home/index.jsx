import {useState,useEffect} from 'react';

 const Home = ()=>{
	const [name,setName] = useState('zs');
	const [isShow,setIsShow] = useState(true);
	const [listData,setListData] = useState([{
		name:'zs',
		age:18,
		gender:'man'
	},{
		name:'ls',
		age:20,
		gender:'woman'
	}])

	useEffect(()=>{
			
	},[]) 
	return (
		<div>
			{listData.map(item=>{
					return (
					<div key={item.name}>
						<div>{item.name}</div>
						<div>{item.age}</div>
						<div>{item.gender}</div>	
					</div>)
			})}
		</div>
	)
}

export default Home