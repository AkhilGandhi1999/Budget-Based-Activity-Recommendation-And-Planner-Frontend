import { defineComponent, ref, computed  } from "vue";

export default defineComponent({
  name: "TileSelection",
  components: {},
  props: ["attraction_types"],
  setup(props) {


    // const model = ref(2)
    // const priceModel = ref(4)

    const chosenArray = ref([]);
    const category = ref([]);
    // eslint-disable-next-line vue/no-setup-props-destructure
    category.value = props.attraction_types;


    const AddList = (id) => {
      const index = category.value.findIndex(item => item.id === id);
      //  disable add button

      category.value[index].disabled = true;

      //to add different rating
      category.value[index].rating = 0;
      // push the element
      chosenArray.value.push(category.value[index]);
      // chosenArray.value.push(addedItem);

    };

    const removeChosen = (index) => {
      chosenArray.value.splice(index, 1);
    };
    const removeList = (id) => {
      const index = chosenArray.value.findIndex(item => item.id === id);
      chosenArray.value.splice(index, 1);
      // toggle button
      const index1 = category.value.findIndex(item => item.id === id);
      category.value[index1].disabled = false;

    };
    const updateRating = (id, rating) => {
      const index = chosenArray.value.findIndex((item) => item.id === id);
      chosenArray.value[index].rating = rating;
      console.log(chosenArray.value)
    };

    return {
      AddList,
      chosenArray,
      removeList,
      removeChosen,
      category,
      thirdModel: ref(0),
      updateRating


      // model,
      // priceModel,
      // priceLabel: computed(() => `$ ${priceModel.value}`),
      // arrayMarkerLabel: [
      //   { value: 3, label: '$3' },
      //   { value: 4, label: '$4' },
      //   { value: 5, label: '$5' },
      //   { value: 6, label: '$6' }
      // ]

    };
  }
});
