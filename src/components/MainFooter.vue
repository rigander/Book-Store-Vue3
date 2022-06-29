<template>
  <footer>
    <div id="list-of-themes">
      <div id="biography-true-stories">
        <h3>Biography & True Stories</h3>
        <ul>
          <li><a href="">General</a></li>
          <li><a href="">Diaries, Letters, & Journals</a></li>
          <li><a href="">Memoirs</a></li>
          <li><a href="">True Stories</a></li>
          <li><a href="">Generic Exams</a></li>
          <li><a href="">GK Titles</a></li>
          <li><a href="">Medical Entrance</a></li>
          <li><a href="">Other Entrance Exams</a></li>
          <li><a href="">PG Entrance Examinations</a></li>
          <li><a href="">Self-help Titles</a></li>
          <li><a href="">Sociology</a></li>
        </ul>
      </div>
      <div id="professional-reference">
        <h3>Professional & Reference </h3>
        <ul>
          <li><a href="">Academic and Reference</a></li>
          <li><a href="">Business Trade</a></li>
          <li><a href="">Engineering and Computer Science</a></li>
          <li><a href="">Humanities, Social Sciences and Languages</a></li>
          <li><a href="">Introduction to Computers</a></li>
          <li><a href="">Science and Maths</a></li>
          <li><a href="">Trade Business</a></li>
          <li><a href="">English Language & Literature</a></li>
          <li><a href="">English Language Teaching</a></li>
          <li><a href="">Environment Awareness</a></li>
          <li><a href="">Environment Protection</a></li>
        </ul>
      </div>
      <div id="earth-sciences">
        <h3>Earth Sciences</h3>
        <ul>
          <li><a href="">Earth Sciences</a></li>
          <li><a href="">Geography</a></li>
          <li><a href="">The Environment</a></li>
          <li><a href="">Regional & Area Planning</a></li>
          <li><a href="">Fantasy</a></li>
          <li><a href="">Gay</a></li>
          <li><a href="">Humorous</a></li>
          <li><a href="">Interactive</a></li>
          <li><a href="">Legal</a></li>
          <li><a href="">Lesbian</a></li>
          <li><a href="">Men'S Adventure</a></li>
        </ul>
      </div>
      <div id="mathematics">
        <h3>Mathematics</h3>
        <ul>
          <li><a href="">Algebra</a></li>
          <li><a href="">Differential Equations</a></li>
          <li><a href="">Discrete Mathematics</a></li>
          <li><a href="">Fourier Analysis</a></li>
          <li><a href="">Numerical Analysis</a></li>
          <li><a href="">Probability</a></li>
          <li><a href="">Statistic Methods/data Analyses</a></li>
          <li><a href="">Stochastic And Random Processes</a></li>
          <li><a href="">Topology</a></li>
          <li><a href="">Statistics</a></li>
          <li><a href="">Mathematics</a></li>
        </ul>
      </div>
    </div>
    <div class="banking"><div id="accept">We accept all major Credit Card/Debit Card/Internet Banking</div><div class="cards">
      <img src="@/assets/images/Footer/Master-Card.png" alt=""><img src="@/assets/images/Footer/American-Express.png" alt=""><img src="@/assets/images/Footer/Visa.png" alt="">
    </div> </div>
    <div id="bottom"><a href="">Conditions of Use Privacy Notice© 2012-2013, Booksonline, Inc. or its affiliates</a></div>
  </footer>
</template>

<script>
export default {
  name: "MainFooter"
}
</script>

<style scoped lang="scss">

footer{
  display: flex;
  flex-direction: column;
  color: #dddddd;
  margin-top: 25px;
  height: 513px;
  background-color: #434243;
  #list-of-themes{
    align-self: center;
    height: 354px;
    width: 973px;
    display: flex;
    justify-content: space-between;
    font-size: 14px;
    a{
      &:hover{
        color: #FFCC00;
      }
    }
  }
  #earth-sciences{
    margin-left: 52px;
  }
  #biography-true-stories{
    margin-right: -25px;
  }
  ul{
    list-style: none;
    height: 252px;
    width: 172px;
    padding: 0;
    margin: 0;
    line-height: 1.7;
    li{
      border-bottom: 1px solid rgba(191, 191, 191, 0.23);
      white-space: nowrap;
      a{
        text-decoration: none;
        color: #dddddd;
      }
    }
  }
  h3{
    font-size: 20px;
    font-weight: 300;
  }
}
.banking{
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
  font-size: 20px;
  height: 96px;
  background-color: #303133;
  #accept{
    margin-top: 9px;
  }
  .cards{
    margin-top: -5px;
  }
  img{
    margin-left: 5px;
  }
}
#bottom{
  display: flex;
  justify-content: center;
  font-size: 16px;
  border-top: 1px solid rgba(153, 153, 153, 0.24);
  height: 62px;
  background-color: #303133;
  a{
    margin-top: 17px;
    text-decoration: none;
    color: #ffffff;
    padding-right: 4px;
    &:hover{
      color: #FFCC00;
    }
  }
}

</style>