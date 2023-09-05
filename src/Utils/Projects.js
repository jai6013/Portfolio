import yatraImage from '../assets/yatra.png'
import gabImage from '../assets/HomePage.png'

const Technologies_Map = {
	HTML: {
		name: 'HTML',
		className: 'devicon-html5-plain colored'
	},
	CSS: {
		name: 'CSS',
		className: 'devicon-css3-plain colored'
	},
	javaScript: {
		name: "javaScript",
		className: 'devicon-javascript-plain colored'
	},
	Express: {
		name: 'Express',
		className: 'devicon-express-original'
	},
	MongoDb: {
		name: 'MongoDb',
		className: 'devicon-mongodb-plain colored'
	},
	ReactJs: {
		name: 'ReactJs',
		className: 'devicon-react-original colored'
	},
	MaterialUi: {
		name: 'MaterialUi',
		className: 'devicon-materialui-plain'
	},
}

export const projects = [
	{
		img: 'https://cdn.hashnode.com/res/hashnode/image/upload/v1627369710941/pErWlMs-3.png?auto=compress',
		title: 'InternTheory',
		des: 'InternTheory.com is a platform that offers a wide range of skill-oriented courses for purchase, helping users build their careers and skills effectively.',
		demo: '',
		live: 'https://drive.google.com/file/d/1fux6xrU0CR6dmwlqbSNgEXloVmMib8K_/view?usp=drive_link',
		gitHub: 'https://github.com/AlbartJose/InternTheoryClone_Unit3',
		technologies: [Technologies_Map.HTML, Technologies_Map.CSS, Technologies_Map.javaScript, Technologies_Map.Express, Technologies_Map.MongoDb],
	},
	{
		img: yatraImage,
		title: 'Yatra',
		des: 'Yatra.com is an Indian online travel agency offering various travel services, including flight and hotel bookings, holiday packages, and transportation reservations. It simplifies travel planning and booking for users.',
		demo: '',
		live: 'https://yatraa.netlify.app/',
		gitHub: 'https://github.com/neerajmasai/yatra-clone',
		technologies: [Technologies_Map.ReactJs, Technologies_Map.HTML, Technologies_Map.CSS, Technologies_Map.javaScript,Technologies_Map.MaterialUi, Technologies_Map.Express, Technologies_Map.MongoDb],
	},
	{
		img: gabImage,
		title: 'Gab',
		des: 'Gab.com is a social networking platform emphasizing open communication and user interactions.',
		demo: '',
		live: 'https://gab-clone.netlify.app/',
		gitHub: 'https://github.com/jai6013/Gab_Clone',
		technologies: [Technologies_Map.ReactJs, Technologies_Map.HTML, Technologies_Map.CSS, Technologies_Map.javaScript, Technologies_Map.Express, Technologies_Map.MongoDb],
	},
];
