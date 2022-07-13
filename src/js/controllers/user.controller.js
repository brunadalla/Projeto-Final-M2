import { Api } from './Api.controller.js'

async function defineProfileInfo() {
    const userInfo = await JSON.parse(localStorage.getItem('@Kenzie-Habit-M2:user')) 

    const headerUserImage  = document.getElementsByClassName('header_userImage')[0]
    const sectionUserImage = document.getElementsByClassName('section_userInfo_image')[0]
    const sectionUserName  = document.getElementsByClassName('section_userInfo_name')[0]

    headerUserImage.src       = userInfo.usr_image
    sectionUserImage.src      = userInfo.usr_image
    sectionUserName.innerText = userInfo.usr_name

}

defineProfileInfo()

const data          = await Api.readAllUserHabits()
const dataConcluded = data.filter(habit => habit.habit_status === true)

const habitsTable = document.querySelector('tbody')

function showHabits(data) {
    data.forEach(habit => {
        const newHabit = //new Habit .method(habit)

        habitsTable.appendChild(newHabit)
    });
}

//showHabits(data)

