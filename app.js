"use strict";

const stuffData = {
  firstName: "John",
  secondName: "Smith",
  age: 42,
  gender: "male",
  role: "CEO",
  yearsOfExperience: 1,
  inCompanySince: "03 Aug 2005",
  subordinators: [
    {
      firstName: "Jane",
      secondName: "Clark",
      age: 34,
      gender: "female",
      role: "Chief HR officer",
      yearsOfExperience: 12,
      inCompanySince: "12 May 2017",
      subordinators: [
        {
          firstName: "Ferenz",
          secondName: "Derd",
          age: 27,
          gender: "male",
          role: "Senior HR manager",
          yearsOfExperience: 7,
          inCompanySince: "15 Oct 2019",
          subordinators: [
            {
              firstName: "Gregor",
              secondName: "Bur",
              age: 26,
              gender: "male",
              role: "Middle HR manager",
              yearsOfExperience: 7,
              inCompanySince: "22 Apr 2020",
              subordinators: [
                {
                  firstName: "Caleb",
                  secondName: "Ottvik",
                  age: 24,
                  gender: "male",
                  role: "Junior HR manager",
                  yearsOfExperience: 7,
                  inCompanySince: "04 Jun 2020",
                  subordinators: null,
                },
                {
                  firstName: "Peri",
                  secondName: "Hafar",
                  age: 22,
                  gender: "female",
                  role: "Junior HR manager",
                  yearsOfExperience: 7,
                  inCompanySince: "18 Dec 2021",
                  subordinators: null,
                },
              ],
            },
          ],
        },
        {
          firstName: "Syenn",
          secondName: "Gungvind",
          age: 38,
          gender: "female",
          role: "Senior HR manager",
          yearsOfExperience: 15,
          inCompanySince: "12 May 2012",
          subordinators: [
            {
              firstName: "Enos",
              secondName: "Zey",
              age: 30,
              gender: "male",
              role: "Middle HR manager",
              yearsOfExperience: 5,
              inCompanySince: "18 Dec 2020",
              subordinators: [
                {
                  firstName: "Caleb",
                  secondName: "Ottvik",
                  age: 24,
                  gender: "male",
                  role: "Junior HR manager",
                  yearsOfExperience: 7,
                  inCompanySince: "04 Jun 2020",
                  subordinators: null,
                },
              ],
            },
            {
              firstName: "Caleb",
              secondName: "Ottvik",
              age: 24,
              gender: "male",
              role: "Junior HR manager",
              yearsOfExperience: 7,
              inCompanySince: "04 Jun 2020",
              subordinators: null,
            },
            {
              firstName: "Peri",
              secondName: "Hafar",
              age: 22,
              gender: "female",
              role: "Junior HR manager",
              yearsOfExperience: 7,
              inCompanySince: "18 Dec 2021",
              subordinators: null,
            },
          ],
        },
        {
          firstName: "Enos",
          secondName: "Zey",
          age: 30,
          gender: "male",
          role: "Middle HR manager",
          yearsOfExperience: 5,
          inCompanySince: "18 Dec 2020",
          subordinators: [
            {
              firstName: "Caleb",
              secondName: "Ottvik",
              age: 24,
              gender: "male",
              role: "Junior HR manager",
              yearsOfExperience: 7,
              inCompanySince: "04 Jun 2020",
              subordinators: null,
            },
          ],
        },
        {
          firstName: "Gregor",
          secondName: "Bur",
          age: 26,
          gender: "male",
          role: "Middle HR manager",
          yearsOfExperience: 7,
          inCompanySince: "22 Apr 2020",
          subordinators: [
            {
              firstName: "Caleb",
              secondName: "Ottvik",
              age: 24,
              gender: "male",
              role: "Junior HR manager",
              yearsOfExperience: 7,
              inCompanySince: "04 Jun 2020",
              subordinators: null,
            },
            {
              firstName: "Peri",
              secondName: "Hafar",
              age: 22,
              gender: "female",
              role: "Junior HR manager",
              yearsOfExperience: 7,
              inCompanySince: "18 Dec 2021",
              subordinators: null,
            },
          ],
        },
        {
          firstName: "Caleb",
          secondName: "Ottvik",
          age: 24,
          gender: "male",
          role: "Junior HR manager",
          yearsOfExperience: 7,
          inCompanySince: "04 Jun 2020",
          subordinators: null,
        },
        {
          firstName: "Peri",
          secondName: "Hafar",
          age: 22,
          gender: "female",
          role: "Junior HR manager",
          yearsOfExperience: 7,
          inCompanySince: "18 Dec 2021",
          subordinators: null,
        },
      ],
    },
    {
      firstName: "Olga",
      secondName: "Petrenko",
      age: 31,
      gender: "female",
      role: "CTO",
      yearsOfExperience: 12,
      inCompanySince: "15 Apr 2019",
      subordinators: [
        {
          firstName: "Peter",
          secondName: "Barton",
          age: 29,
          gender: "male",
          role: "JS competence manager",
          yearsOfExperience: 11,
          inCompanySince: "01 Feb 2020",
          subordinators: null,
        },
      ],
    },
    {
      firstName: "Jack",
      secondName: "Black",
      age: 45,
      gender: "male",
      role: "Office manager",
      yearsOfExperience: 20,
      inCompanySince: "24 Apr 2016",
      subordinators: null,
    },
  ],
};

// 1 - потрібно дістати вложеність (зобити однорівневий масив) +
// 2 - відфільтурвати //  firstName + secondName +
// 3 - відсортувати +
// 4 - відобразити

function parsingStuff(workersData, property) {
  let workersArray = [];
  flatStuff(workersData, workersArray);

  const uniqueWorkers = filterUniqueWorkers(workersArray);
  const sortedWorkers = uniqueWorkers.sort(sortByProperty(property));

  showDescriptionForEachWorker(sortedWorkers);
}

function flatStuff(stuffStructure, accamulationArray) {
  accamulationArray.push(stuffStructure);

  if (stuffStructure.subordinators === null) {
    return null;
  }

  stuffStructure.subordinators.forEach((originator) => {
    flatStuff(originator, accamulationArray);
  });
}

function filterUniqueWorkers(workers) {
  const changedWorkers = workers.map((worker) => {
    // const { firstName, secondName, ...rest } = worker;
    return [`${worker.firstName} ${worker.secondName}`, worker];
  });

  const workersMap = new Map(changedWorkers);

  return [...workersMap.values()]; // new Map().values(), Object.values({id: 123})
}

function sortByProperty(property = "age") {
  return (a, b) => (a[property] < b[property] ? 1 : -1);
}

function showDescriptionForEachWorker(workers) {
  workers.forEach((worker) => {
    const duration = Math.floor(
      (Date.parse(new Date()) - Date.parse(worker.inCompanySince)) /
        1000 /
        31536000
    );

    // const duration2 = new Date().getFullYear();
    // const inCompanySince2 = new Date(worker.inCompanySince);
    // console.log(duration2 - inCompanySince2.getFullYear());

    console.log(
      `${worker.firstName} ${worker.secondName} as a ${worker.role}, has ${
        worker.yearsOfExperience
      } ${
        worker.yearsOfExperience > 1 ? "years" : "year"
      } of experience and works ${duration} ${
        duration > 1 ? "years" : "year"
      } in the company`
    );
  });
}

parsingStuff(stuffData, "age");
