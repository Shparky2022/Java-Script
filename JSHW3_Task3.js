const enterprises = [
    {
      id: 1,
      name: "Предприятие 1",
      departments: [
        {
          id: 2,
          name: "Отдел тестирования",
          employees_count: 10,
        },
        {
          id: 3,
          name: "Отдел маркетинга",
          employees_count: 20,
        },
        {
          id: 4,
          name: "Администрация",
          employees_count: 15,
        },
      ]
    },
    {
      id: 5,
      name: "Предприятие 2",
      departments: [
        {
          id: 6,
          name: "Отдел разработки",
          employees_count: 50,
        },
        {
          id: 7,
          name: "Отдел маркетинга",
          employees_count: 20,
        },
        {
          id: 8,
          name: "Отдел охраны труда",
          employees_count: 5,
        },
      ]
    },
    {
      id: 9,
      name: "Предприятие 3",
      departments: [
        {
          id: 10,
          name: "Отдел аналитики",
          employees_count: 0,
        },
      ]
    }
  ]
  maxID = 0
  enterprises.forEach (item => {
    if (item.id > maxID) {
      maxID = item.id
    }
    item.departments.forEach (depts => {
    if (depts.id > maxID) {
      maxID = depts.id
    }
    })
  })
  
  
  
  // Задания:
  // 1. Вывести все предприятия и их отделы. Рядом указать количество сотрудников. Для предприятия посчитать сумму всех сотрудников во всех отделах.
  
  // **Пример:**
  
  // Предприятие 1 (45 сотрудников)
  // - Отдел тестирования (10 сотрудников)
  // - Отдел маркетинга (20 сотрудников)
  // - Администрация (15 человек)
  // Предприятие 2 (75 сотрудников)
  // - Отдел разработки (50 сотрудников)
  // - Отдел маркетинга (20 сотрудников)
  // - Отдел охраны труда (5 сотрудников)
  // Предприятие 3 (нет сотрудников)
  // - Отдел аналитики (нет сотрудников)
  
  // 1ый вариант записи
  for (i=0; i<enterprises.length; i++) {
    emplNum = 0
    for (k=0; k<enterprises[i].departments.length; k++) {
    emplNum += enterprises[i].departments[k].employees_count
    }
    if (emplNum>0) {
      console.log (enterprises[i].name, '('+ emplNum + ' сотрудников)')
    }
    else {
      console.log (enterprises[i].name, '(нет сотрудников)')
    }
    for (j=0; j<enterprises[i].departments.length; j++) {
      if (emplNum>0) {
      console.log ('-',  enterprises[i].departments[j].name, '('+ enterprises[i].departments[j].employees_count +' сотрудников)')
      }
      else (console.log ('-',  enterprises[i].departments[j].name, '(нет сотрудников)'))
    }
  }
  
  
  // 2ой вариант записи
  enterprises.forEach (company => {
      if (company.departments) {
      emplNum = 0
      company.departments.forEach (dept => {
      emplNum += dept.employees_count
      })
      if (emplNum>0){
        console.log (company.name, '(' + emplNum + ' сотрудников)')
      }
      else {
        console.log (company.name, '(нет сотрудников)')
      }
          company.departments.forEach (dept => {
            if (emplNum>0) {
              console.log ('-', dept.name, '(' + dept.employees_count + ' сотрудников)')
            }
            else {
              console.log ('-', dept.name, '(нет сотрудников)')
            }
          })
      }
  })
  
  
  // 2. Написать функцию, которая будет принимать 1 аргумент (id отдела или название отдела и возвращать название предприятия, 
  // к которому относится).
  // Пример:
  // getEnterpriseName(4) // Предприятие 1
  // getEnterpriseName("Отдел маркетинга") // Предприятие 2
  
  var loopEnd = false
  var lastLoop = false
  
  let getEnterpriseName = function (data) { 
    for (i=0; i<enterprises.length; i++) {
      for (j=0; j<enterprises[i].departments.length;j++){
        if (enterprises[i].departments[j].id == data || enterprises[i].departments[j].name == data ) {
            loopEnd = true
            console.log (enterprises[i].name)
        break}
  
        else if (i == enterprises.length-1 && j == enterprises[i].departments.length-1) { 
            lastLoop = true}
        
      } 
    if (loopEnd) {
        break}
    else if (lastLoop) {
        console.log ('There is no such department!')}
    }
    }
  getEnterpriseName ("Отдел аналитики")
  
  
  // 3. Написать функцию, которая будет добавлять предприятие. В качестве аргумента принимает название предприятия
  // Пример:
  // addEnterprise("Название нового предприятия")
  
  const addEnterprise = function (company) {enterprises.push (
    {
    id: maxID+1,
    name: company,
    departments: [],
    }
  )}
  
  addEnterprise ('Предприятие 4')
  console.log (enterprises)
  
  
  // 4. Написать функцию, которая будет добавлять отдел в предприятие. В качестве аргумента принимает id предприятия,
  //  в которое будет добавлен отдел и название отдела.
  // Пример:
  // addDepartment(1, "Название нового отдела")
  
  let addDepartment = function (compID, deptName) {
    compIndex = enterprises.findIndex (item => item.id === compID)
    if (enterprises[compIndex]) {
        enterprises[compIndex].departments.push ({id: maxID+1, name: deptName, employees_count:0})
        console.log (enterprises[compIndex].name, enterprises[compIndex].departments)
    }
    else {
      console.log ('There is no Enterprise with this ID')
    }
  }
  
  addDepartment (4, 'Название нового отдела')
  
  
  // 5. Написать функцию для редактирования названия предприятия. 
  // Принимает в качестве аргумента id предприятия и новое имя предприятия.
  // Пример:
  // editEnterprise(1, "Новое название предприятия")
  
  let editEnterpriseName = function (compID, newName) {
      compIndex = enterprises.findIndex (item => item.id === compID)
      if (enterprises[compIndex]) {
        enterprises[compIndex].name = newName
        console.log (enterprises)
      }
      else {
        console.log ('There is no Enterprise witр this ID')
      }
    }
  
  editEnterpriseName (9, 'Test Company')
  
  
  // 6. Написать функцию для редактирования названия отдела. Принимает в качестве аргумента id отдела и новое имя отдела.
  // Пример:
  // editDepartment(7, "Новое название отдела")
  
  const editDepartmentName = function (deptID, newName) {
    enterprises.forEach (comp => {
      deptIndex = comp.departments.findIndex ( dept => dept.id === deptID)
      if (deptIndex === -1) { }
      else {
        comp.departments[deptIndex].name = newName
        console.log (comp.departments)
      }
    })
   console.log ('There is no department with this ID')
  }
  
   editDepartmentName (10, 'Test Department')
  
  
  // 7. Написать функцию для удаления предприятия. В качестве аргумента принимает id предприятия.
  // Пример:
  // deleteEnterprise(1)
  
  const deleteEnterprise = function (entID) {
    if (enterprises.find (item => item.id == entID)) {
        b = enterprises.filter (item => item.id !== entID)
        console.log (b)
    }
    else {
        console.log ('There is no Company with this ID')
    }
  }
  
  deleteEnterprise (1)
  
  
  
  // 8. Написать функцию для удаления отдела. В качестве аргумента принимает id отдела.
  // Удалить отдел можно только, если в нем нет сотрудников.
  // Пример:
  // deleteDepartment(3)
  
  
  const deleteDepartment = function (deptID) {
    b = -2
    enterprises.forEach (compnay => {
    a = compnay.departments.findIndex (dept => dept.id == deptID)
        if (a>-1) {
        compnay.departments.splice(a,1)
        b = a      
        console.log (compnay.name, compnay.departments)    
    }    
    
  })
  if (b == -2) {
  console.log ('There is no department with this ID')
  }
  }
  
  deleteDepartment (3)
  
  
  // 9. Написать функцию для переноса сотрудников между отделами одного предприятия. 
  // В качестве аргумента принимает два значения: id отдела, из которого будут переноситься сотрудники
  // и id отдела, в который будут переноситься сотрудники).
  // Пример:
  // moveEmployees(2, 3)
  
  const moveEmployees = function (oldDept, newDept) {
    j = 0
    enterprises.forEach (company => {
        a = company.departments.findIndex(dept => dept.id == newDept)
        b = company.departments.findIndex(dept => dept.id == oldDept)
        if (a>=0 && b>=0 && a!==b) {
            j = -2
            d = company.departments[a].employees_count + company.departments[b].employees_count
            console.log (company.departments[a].name, company.departments[a].employees_count)
            console.log (company.departments[b].name, company.departments[b].employees_count)
  
            company.departments[a].employees_count = d
            company.departments[b].employees_count = 0
            console.log (company.departments[a].name, company.departments[a].employees_count)
            console.log (company.departments[b].name, company.departments[b].employees_count)           
        }
    })      
    if (j == 0) {
        console.log ('There is no Compnay with this departments ID combination')
    }
  }
  
  moveEmployees (7,7)