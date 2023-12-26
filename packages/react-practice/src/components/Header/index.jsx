import {useState} from 'react';
import {ref} from 'vue';


export default val =>{
	val = val?.data?.attrs || val;
	const {type='vue'} = val;

	if(type === 'vue') return vueComp(val)

	return reactComp(val);
}

const vueComp = val=>{
	const name = ref('vueHeader');
	return <div>{name.value}</div>
}

const reactComp = val=>{
	const name = useState('reactHeader')
	return <div>{name}</div>
}