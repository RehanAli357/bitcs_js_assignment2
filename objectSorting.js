class Person {
    constructor() {
      this.allDetails = [];
    }
  
    addDetails(name, age, salary, sex) {
      this.allDetails.push({
        name: name,
        age: age,
        salary: salary,
        sex: sex,
      });
    }
  
    getDetails() {
      return this.allDetails;
    }
  
    static partition(arr, low, high, param, sortType) {
      let pivot = arr[high][param];
      let i = low - 1;
  
      for (let j = low; j < high; j++) {
        let condition = sortType === 'asc' ? arr[j][param] < pivot : arr[j][param] > pivot;
        if (condition) {
          i++;
          [arr[i], arr[j]] = [arr[j], arr[i]];
        }
      }
  
      [arr[i + 1], arr[high]] = [arr[high], arr[i + 1]];
      return i + 1;
    }
  
    static quickSort(arr, low, high, param, sortType) {
      if (low < high) {
        let pivotIndex = Person.partition(arr, low, high, param, sortType);
        Person.quickSort(arr, low, pivotIndex - 1, param, sortType);
        Person.quickSort(arr, pivotIndex + 1, high, param, sortType);
      }
    }
  
    static sort(person1, param, sortType) {
      let sortedData = person1.allDetails;
      Person.quickSort(sortedData, 0, sortedData.length - 1, param, sortType);
      return sortedData;
    }
  }
  
  let person1 = new Person();
  person1.addDetails("Rehan", 24, 15000, "male");
  person1.addDetails("Kamil", 23, 10000, "male");
  person1.addDetails("Shruti", 24, 25000, "female");
  
  console.log(person1.getDetails());
  console.log(Person.sort(person1, "name", "desc"));
  