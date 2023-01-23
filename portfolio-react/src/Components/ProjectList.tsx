const titleList: string[] = [
                            'Pop It - A Social Media Site',
                            'Shopping Cart', 
                            'To-Do List',
                             'Memory Card Game',
                            ]
const descList: string[] = [
                            'A full-stack social media app focused on trading KPOP merch and paraphernalia.',
                            'A Pokemon-themed shopping cart project built with TypeScript, React and React-Router with data fetched from RESTful PokeAPI using async functions and promises',
                            'A To-Do List implemented built with HTML, CSS, and Vanilla JS that utilizes client-side local storage',
                            'Memorize all Loona members by playing! Click on any member only once to earn points!',
                            ]
const linkCodeList: string[] = [
                                'https://github.com/Muneyy/inventory-application',
                                'https://github.com/Muneyy/TOP-shopping-cart',
                                'https://github.com/Muneyy/TOP-ToDolist',
                                'https://github.com/Muneyy/TOP-memory-card',
                            ]
const linkLiveList: string[] = [
                                'https://popit-trading.vercel.app',
                                'https://muneyy.github.io/TOP-shopping-cart/',
                                'https://muneyy.github.io/TOP-ToDolist/',
                                'https://muneyy.github.io/TOP-memory-card/',
                            ]
const imgSrcList: string[] = [
                              'popit.jpg',
                              'shopping-cart.jpeg',
                              'todolist.jpeg',
                              'memory-game.jpg',
                            ]

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