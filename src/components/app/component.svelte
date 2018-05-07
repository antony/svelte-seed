<p>
  Hello { name }, the time is <span class="the-time">{ hours }:{ minutes }:{ seconds }</span>
</p>

<style>
  .the-time {
    font-weight: bold;
  }
</style>

<script>
  export default {
    data () {
			return {
				time: new Date()
			}
		},

		computed: {
			hours: ({ time }) => time.getHours(),
			minutes: ({ time }) => time.getMinutes(),
			seconds: ({ time }) => time.getSeconds()
		},

		oncreate () {
			this.interval = setInterval( () => {
				this.set({ time: new Date() })
			}, 1000 )
		},

		ondestroy () {
			clearInterval( this.interval )
		}
  }
</script>>