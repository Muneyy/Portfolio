const titleList: string[] = ['Shopping Cart', 
                             'CV Creator',
                             'Memory Card Game',
                             'To-Do List',]
const descList: string[] = ['A Pokemon-themed shopping cart project built with TypeScript, React and React-Router with data fetched from RESTful PokeAPI using async functions and promises',
                            'A responsive curriculum vitae creator built with React using only class components',
                            'Memorize all Loona members by playing! Click on any member only once to earn points!',
                            'A To-Do List implemented built with HTML, CSS, and Vanilla JS that utilizes client-side local storage',
                            ]
const linkCodeList: string[] = ['https://github.com/Muneyy/TOP-shopping-cart',
                                'https://github.com/Muneyy/TOP-cv-project',
                                'https://github.com/Muneyy/TOP-memory-card',
                                'https://github.com/Muneyy/TOP-ToDolist']
const linkLiveList: string[] = ['https://muneyy.github.io/TOP-shopping-cart/',
                                'https://muneyy.github.io/TOP-cv-project/',
                                'https://muneyy.github.io/TOP-memory-card/',
                                'https://muneyy.github.io/TOP-ToDolist/']
const imgSrcList: string[] = ['shopping-cart.jpeg',
                              'cv-creator.jpg',
                              'memory-game.jpg',
                              'todolist.jpeg']

const ProjectList: object[] = []

for (let i=0; i<titleList.length; i++) {
    const projectObject = {
        title: titleList[i],
        desc: descList[i],
        linkCode: linkCodeList[i],
        linkLive: linkLiveList[i],
        imgSrc: imgSrcList[i]
    }
    ProjectList.push(projectObject)
}

export default ProjectList