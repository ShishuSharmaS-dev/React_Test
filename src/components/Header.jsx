  const Header = () => {
    const userInfo = [
      {
      username : "Shishu",
      email : "sshishu389@gmail.com",
      location: "Chennai",
      },
      {
      username : "Sharma",
      email : "ssharma389@gmail.com",
      location: "MADRAS",
      },
      {
      username : "Shahil",
      email : "ssahil389@gmail.com",
      location: "North Madras"
      }
    ]
    return (
      <>
      <div>
        <h1>Welcome to My Website</h1>
        <nav>
          <a href="">Home</a>
          <a href="">About</a>
          <a href="">Contact</a>
        </nav>
        {userInfo.map(({username, email, location})=>(
        <ul key={Math.random()}>
          <li>{username}</li>
          <li>{email}</li>
          <li>{location}</li>
        </ul>
      ))}
      </div>
      </>
    )
  }

  export default Header


  // const Header = () => {
  //   const userInfo = [
  //     {
  //       username: "Shishu",
  //       email: "sshishu389@gmail.com",
  //       location: "Chennai",
  //     },
  //     {
  //       username: "Sharma",
  //       email: "ssharma389@gmail.com",
  //       location: "MADRAS",
  //     },
  //     {
  //       username: "Shahil",
  //       email: "ssahil389@gmail.com",
  //       location: "North Madras",
  //     },
  //   ];
  
  //   return (
  //     <>
  //       <div>
  //         <h1>Welcome to My Website</h1>
  //         <nav>
  //           <a href="">Home</a>
  //           <a href="">About</a>
  //           <a href="">Contact</a>
  //         </nav>
  //         {userInfo.map((user) => (
  //           <ul key={Math.random()}>  
  //             <li><strong>Username:</strong> {user.username}</li>
  //             <li><strong>Email:</strong> {user.email}</li>
  //             <li><strong>Location:</strong> {user.location}</li>
  //           </ul>
  //         ))}
  //       </div>
  //     </>
  //   );
  // };
  
  // export default Header;
  