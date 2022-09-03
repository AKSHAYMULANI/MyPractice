// import module.css here;
 import styles from './userDetails.module.css'


const UserDetails = ({avatar,firstName,lastName,karma,followers,posts,isFollow,address}) => {

  function kFormatter(num) {
    return Math.abs(num) > 999 ? Math.sign(num)*((Math.abs(num)/1000).toFixed(1)) + 'k' : Math.sign(num)*Math.abs(num)
}

  return (
    <>
      <div className={styles.container} data-testid="user-container">
        {/* user image */}
        <img className={styles.avimg} src={avatar} alt="avatar" />
        <div>
          <div className={styles.name}>
            <h3 data-testid="user-fname">{firstName}</h3>
            <h3 data-testid="user-lname">{lastName}</h3>
          </div>
          <div>
            <p data-testid="user-address">{address}</p>
          </div>
        </div>
        <div>
          <h3 data-testid="user-karma">{karma}</h3>
          <p>Karma</p>
        </div>
        <div>
          <h3 data-testid="user-followers">{followers}</h3>
          <p>Followers</p>
        </div>
        <div>
          <h3 data-testid="user-posts">{posts}</h3>
          <p>Posts</p>
        </div>
        <button className={styles.btn} data-testid="follow-btn">{isFollow?'Unfollow':'Follow'}</button>
      </div>
    </>
  );
};
export default UserDetails;
