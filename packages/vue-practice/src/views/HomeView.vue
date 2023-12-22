<script>
// @ is an alias to /src
import HelloWorld from "@/components/HelloWorld.vue";
import { deepClone } from "@front-end/utils";

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
  mounted() {
    console.log(deepClone({ name: "zs", age: 18 }));
  },
};
</script>
