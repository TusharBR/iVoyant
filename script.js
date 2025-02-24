const usersData = [
    {
      id: 1,
      account: {
        avatar:
          "https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png",
        name: "Ravi Teja",
        email: "raviteja@gmail.com",
      },
      role: "Employee",
      designation: "Sr. Software Engineer",
      applications: [
        {
          application: {
            name: "figma",
          },
          attachedPolicy: "Default",
          key: "figma",
          permissions: ["view", "edit", "approve"],
        },
        {
          application: {
            name: "slack",
          },
          attachedPolicy: "Default",
          key: "slack",
          permissions: ["view", "edit", "approve"],
        },
        {
          application: {
            name: "confluence",
          },
          attachedPolicy: "Default",
          key: "confluence",
          permissions: ["view", "edit", "approve"],
        },
        {
          application: {
            name: "msOffice",
          },
          attachedPolicy: "Default",
          key: "msOffice",
          permissions: ["view", "edit", "approve"],
        },
        {
          application: {
            name: "hubspot",
          },
          attachedPolicy: "Default",
          key: "hubspot",
          permissions: ["view", "edit", "approve"],
        },
        {
          application: {
            name: "adobe",
          },
          attachedPolicy: "Default",
          key: "adobe",
          permissions: ["view", "edit", "approve"],
        },
        {
          application: {
            name: "github",
          },
          attachedPolicy: "Default",
          key: "github",
          permissions: ["view", "edit", "approve"],
        },
      ],
      groups: ["Voyage", "Platform Nx", "Error Nx", "Engage"],
      createdOn: new Date("02/10/2024").toLocaleDateString(),
    },
    {
      id: 2,
      account: {
        name: "Brq",
        email: "raviteja@gmail.com",
      },
      role: "Employee",
      designation: "Sr. Software Engineer",
      applications: [],
      groups: [],
      createdOn: new Date("02/10/2024").toLocaleDateString(),
    },
  ]

  const newarr=usersData.map((cv)=>{
    return {id:cv.id,"account.name": cv?.account?.name,"account.email": cv?.account?.email,role: cv.role,
        designation: cv.designation,
        applications: cv.applications,
        groups: cv.groups,
        createdOn: cv.createdOn}
})
  console.log(newarr)