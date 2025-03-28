const {$_GET} = await import(`../$_GET/$_GET.js`)
const {calendar} = await import(`../Date/Date.js`)
const createCalendar = (obj) =>{
    const Months = {}
    for(let month=1; month<=12; month++){
        Months[month] = calendar({date:`${obj.year}-${month}-01`, lang: obj.langCode})
    }
    return renderCalendar(Months,obj)
}
const renderCalendar = (cal,obj)=>{
    const gobalFontSize = obj.size == "compact" ? "14px" : "18px"
    const h3FontSize = obj.size == "compact" ? "20px" : "30px;"
    const size = obj.size == "compact" ? "500px" : "100%"
    const dayCellHigh = obj.size == "compact" ? "55px" : "120px"

    let context = `<div class="cal-year">
                        <input class="cal-yearValue" value="${cal[1][1].year}">
                    </div>
                        <div class="cal-ctn" style="font-size:${gobalFontSize};">`

    Object.keys(cal).forEach(m=>{
        const date = new Date(new Date().getFullYear(), m-1, 1)
        let monthName = date.toLocaleString('default', { month: 'long' })
        monthName = monthName.charAt(0).toUpperCase() + monthName.slice(1)

        context += `<div class="cal-month" style="width:${size}">
                        <h3 style="font-size:${h3FontSize};" class="cal-monthName">${monthName}</h3>
                        <div class="cal-days">`

        let firstDay = cal[m][1].dayOfWeek
        if(firstDay == 0){ firstDay = 7 }
        if(firstDay != 1){
            for(let i=1; i<firstDay; i++){
                context += `<div class="cal-dayCtn">
                                <div class="cal-day" style="height:${dayCellHigh}"></div>
                            </div>`
            }
        }

        Object.keys(cal[m]).forEach(itm=>{
            const holydayCat =  cal[m][itm].type == null ? "" : cal[m][itm].type
            const color =  cal[m][itm].color == null ? "" : cal[m][itm].color
            context += `<div class="cal-dayCtn">
                            <div class="cal-day ${color}" style="height:${dayCellHigh}">
                                <dayName>${cal[m][itm].dayNameShort}</dayName>
                                <div class="cal-dayNo" style="font-size:${h3FontSize};">${cal[m][itm].day}</div>
                            </div>
                        </div>`
        })

        const lastdDay = cal[m][Object.keys(cal[m]).length-1].dayOfWeek
        if(lastdDay != 6){
            for(let i=0; i<(6-lastdDay); i++){
                context += `<div class="cal-dayCtn">
                                <div class="cal-day" style="height:${dayCellHigh}"></div>
                            </div>`
            }
        }
        context += `</div>
                        </div>`
    })

    context += `<div>
                    </div>`

    return `<div class="cal-monthCtn">${context}</div>
    <link href="${location.href.split("?")[0]}CSS/YearlyCalendar.css?v=1.0" rel="stylesheet">`
}

export class YearlyCalendar{
    constructor(props){
        this.year =  $_GET().year == null ? props.year : $_GET().year
        this.calendar = createCalendar({year:this.year, size:props.size })
    }
    init(){
        return this.calendar
    }
    events(){
        const cal_yearValue = document.querySelector(".cal-yearValue")
        cal_yearValue.addEventListener("change",()=>{
            location.href = `${location.href.split("?")[0]}?year=${cal_yearValue.value}`
            console.log(cal_yearValue.value)
        })
        cal_yearValue.addEventListener("keyup",(e)=>{
            if(e.keyCode == 13){
                location.href = `${location.href.split("?")[0]}?year=${cal_yearValue.value}`
                console.log(cal_yearValue.value)
            }
        })
    }
}