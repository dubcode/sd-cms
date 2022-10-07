<template>
    <div class="row callback">
	<div class="ctr">
		<h3>Request A Call Back</h3>
		<div class="flex">
            <form action="https://formspree.io/f/mrgdkedk" method="POST">
                <label>
                    <input type="text" name="name" placeholder="Your Name" />
                </label>
                <label>
                    <input type="email" name="email" placeholder="Your Email" />
                </label>
                <label>
                    <input type="telephone" name="telephone" placeholder="Your Telephone" />
                </label>
                <!-- your other form fields go here -->
                <button type="submit">CALL ME BACK</button>
            </form>
		</div>
	</div>
</div>
</template>
<style scoped>
.callback {
  background: #146636;
  padding: 4rem 0;
  text-align: center;
}
.callback h3 {
  color: #fff;
  text-transform: uppercase;
  font-size: 2rem;
  line-height: 2.8rem;
  font-weight: 700;
  margin: 0 0 2rem 0;
}
.callback form {
  min-width: 300px;
  max-width: 460px
}
.callback form input[type="text"],
.callback form input[type="email"],
.callback form input[type="telephone"] {
    width: 100%;
    font-size: 17px;
    padding: 10px;
    margin: 0 0 2rem 0;
}
.callback form button {
  background-color: #fff;
  border: 1px solid #146636;
  color: #146636;
  font-size: 1rem;
  font-weight: 600;
  margin: 0;
  outline: 0;
  line-height: 30px;
  padding: 10px 40px;
  letter-spacing: .3px;
}
.callback form button:hover {
  cursor: pointer;
  border: 1px solid #fff;
  background-color:#146636;
  color: #fff;
}
@media only screen and (min-width: 1140px) {
  .callback h3 {
    font-size: 2.4rem;
  }
}
</style>
<script>
export default {
  name: 'callback',
}
</script>

