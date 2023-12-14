<script>
// @ is an alias to /src
import HelloWorld from "@/components/HelloWorld.vue";

export default {
  name: "HomeView",
  components: {
    HelloWorld,
  },
  render(h) {
    return (
      <div>
        <HelloWorld msg="test"></HelloWorld>
      </div>
    );
  },
};
</script>
