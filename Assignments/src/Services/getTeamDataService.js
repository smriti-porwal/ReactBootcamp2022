const teamMembersList = [
  "smriti-porwal",
  "iswarya15",
  "shaksham08",
  "ap221882",
  "nitishnivedan",
];
export const getTeamsData = () =>
  Promise.all(
    teamMembersList.map(async (teamMember) => {
      const userInformation = await fetch(
        `https://api.github.com/users/${teamMember}`
      );
      return await userInformation.json();
    })
  );

export const getTeamMemberData = async (id) => {
  return (await fetch(`https://api.github.com/users/${id}`)).json();
};
