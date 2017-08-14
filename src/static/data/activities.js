const activites = [
	{
		id: 1,
		name: "Activity 1",
		description: "Test description",
		complete: true,
		objectives: [
			{
				name: 'Objective 1'
			},{
				name: 'Objective 2'
			},{
				name: 'Objective 3'
			},{
				name: 'Objective 4'
			},{
				name: 'Objective 5'
			},{
				name: 'Objective 6'
			},{
				name: 'Objective 7'
			},{
				name: 'Objective 8'
			}
		],
		feedback: {
			author: "James Malone",
			date: "5/15/2017",
			time: "11:32 AM",
			achieve: 1,
			objectives: [false, false, true, false, true, false, true, false],
			comments: "The team performed well, but they could be more organized in determining roles of team members."
		}
	},{
		id: 2,
		name: "Activity 2",
		description: "Test description",
		complete: false,
		objectives: [
			{
				name: 'Objective 1'
			},{
				name: 'Objective 2'
			},{
				name: 'Objective 3'
			},{
				name: 'Objective 4'
			},{
				name: 'Objective 5'
			},{
				name: 'Objective 6'
			},{
				name: 'Objective 7'
			},{
				name: 'Objective 8'
			}
		]
	},{
		id: 3,
		name: "Activity 3",
		description: "Test description",
		complete: true,
		objectives: [
			{
				name: 'Objective 1'
			},{
				name: 'Objective 2'
			},{
				name: 'Objective 3'
			},{
				name: 'Objective 4'
			},{
				name: 'Objective 5'
			},{
				name: 'Objective 6'
			},{
				name: 'Objective 7'
			},{
				name: 'Objective 8'
			}
		],
		feedback: {
			author: "Steven Gresh",
			date: "4/17/2017",
			time: "1:14 PM",
			achieve: 2,
			objectives: [true, true, false, true, true, false, false, false],
			comments: "Overall a solid team."
		}
	},{
		id: 4,
		name: "Activity 4",
		description: "Test description",
		complete: false,
		objectives: [
			{
				name: 'Objective 1'
			},{
				name: 'Objective 2'
			},{
				name: 'Objective 3'
			},{
				name: 'Objective 4'
			},{
				name: 'Objective 5'
			},{
				name: 'Objective 6'
			},{
				name: 'Objective 7'
			},{
				name: 'Objective 8'
			}
		]
	},{
		id: 5,
		name: "Activity 5",
		description: "Test description",
		complete: false,
		objectives: [
			{
				name: 'Objective 1'
			},{
				name: 'Objective 2'
			},{
				name: 'Objective 3'
			},{
				name: 'Objective 4'
			},{
				name: 'Objective 5'
			},{
				name: 'Objective 6'
			},{
				name: 'Objective 7'
			},{
				name: 'Objective 8'
			}
		]
	},
];

export default activites;