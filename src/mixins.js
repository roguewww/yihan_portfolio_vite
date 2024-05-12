export const toggleSelectionMixin = {
    data() {
      return {
        isSelected: [false,false,false,false,false,false],
        i:0,// 用于跟踪按钮是否被选中的状态
      };
    },
    methods: {
      toggleSelection(number) {
        for(this.i=0;this.i<6;this.i++){
          this.isSelected[this.i]=false;
        }
        this.isSelected[number] = !this.isSelected[number]; // 切换按钮的选中状态
      },
    },
  };
  