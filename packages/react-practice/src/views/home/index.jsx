import {useState,useEffect} from 'react';
import Header from '../../components/Header';


 
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

	setTimeout(()=>{
		setName('ls');
	},1000)
	return (
		<div>
			<Header type={'react'}></Header>
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