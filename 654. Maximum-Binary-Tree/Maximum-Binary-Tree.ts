class TreeNode {
  val: number
  left: TreeNode | null
  right: TreeNode | null
  constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
      this.val = (val===undefined ? 0 : val)
      this.left = (left===undefined ? null : left)
      this.right = (right===undefined ? null : right)
  }
}

function build(nums:number[], low:number, high:number):TreeNode | null{
    if(low>high) return null;

    let maxIndex:number = -1, max = Number.MIN_SAFE_INTEGER;
    for(let i:number=low; i<=high; i++){
        if(max < nums[i]){
            max = nums[i];
            maxIndex = i;
        }
    }

    let root:TreeNode = new TreeNode(max);
    root.left = build(nums, low, maxIndex-1);
    root.right = build(nums, maxIndex+1, high);
    return root;
}

function constructMaximumBinaryTree(nums: number[]): TreeNode | null {
    return build(nums,0,nums.length-1);
};