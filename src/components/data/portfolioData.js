/**
 * @SofiDev Esto es JSDOC, si consideras que puede ser complicado solo borralo, es un comentario, no afectará en nada
 * @typedef PortafolioData
 * @property {string} imgSrc Url de la imagen
 * @property {string} title Titulo de la tarjeta
 * @property {string[]} skills Array con tus habilidades ej: [`HTML`, 'CSS', 'JavaScript']
 * @property {string} descripcion La descripcion de la tarjeta
 * @property {string} demoURL Url de una pagina de demostración
 * @property {string} repoURL Url del repositorio, ej: https://github.com/Biancarei2007?tab=repositories
 * @property {string} anim La animación que se ejecutará cuando se cargue la tarjeta, ej: fade-up, fade-right, fade-left, fade-down
 * @property {number} averageBrightness Cuanto brillo tendrá el color de fondo de la tarjeta, ej: 0.1
 */

/**
 * @SofiDev Esto es JSDOC, si consideras que puede ser complicado solo borralo, es un comentario, no afectará en nada
 * @type {PortafolioData[]}
 */
export const portafolioData = [
	{
		imgSrc: 'https://i0.wp.com/epalc.pt/imagens/programador.jpg?fit=1200%2C800&ssl=1',
		title: 'Módulos do 1º Ano',
		skills: [`HTML`, 'CSS', 'JavaScript', 'Sass',],
		descripcion: 'Projetos inovadores que desenvolvi durante o 1º ano do curso, refletindo o meu crescimento e aprendizado na escola.',
		demoURL: '',
		repoURL: '',
		anim: 'fade-right',
	},
	{
		imgSrc: 'https://i0.wp.com/epalc.pt/imagens/programador.jpg?fit=1200%2C800&ssl=1',
		title: 'Módulos do 2º Ano',
		skills: [`HTML`, 'CSS', 'JavaScript', 'Astro',],
		descripcion: 'Projetos inovadores que desenvolvi durante o 2º ano do curso, refletindo o meu crescimento e aprendizado na escola.',
		demoURL: '',
		repoURL: '',
		anim: 'fade-right',
	},
	{
		imgSrc: 'https://i0.wp.com/epalc.pt/imagens/programador.jpg?fit=1200%2C800&ssl=1',
		title: 'Módulos do 3º Ano',
		skills: [`HTML`, 'CSS', 'JavaScript', 'React',],
		descripcion: 'Projetos inovadores que desenvolvi durante o 3º ano do curso, refletindo o meu crescimento e aprendizado na escola.',
		demoURL: '',
		repoURL: '',
		anim: 'fade-right',
	},
];

const skillIcons = {
	HTML: 'skill-icons:html',
	CSS: 'skill-icons:css',
	JavaScript: 'skill-icons:javascript',
	Astro: 'skill-icons:astro',
	React: 'skill-icons:react-dark',
	Sass: 'skill-icons:sass',
	Bootstrap: 'skill-icons:bootstrap',
	Tailwind: 'skill-icons:tailwindcss-dark',
	StyledComponents: 'skill-icons:styledcomponents',
};

/**
 * @description Se mapea el portafolioData para que tenga los iconos de las habilidades
 * 	Puedes ver Array.map en https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map
 */
export const getPortafolioData = portafolioData.map((item) => {
	return {
		// Se coloca todo el contenido previo del item
		...item,
		// Se cambian las skills por los iconos correspondientes
		skills: item.skills.map((skill) => skillIcons[skill]),
	};
});
