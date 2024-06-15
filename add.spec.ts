import add  from './add';

 test('should handle empty string', () => {
    expect(add("")).toBe(0);
 });
 
 test('should handle string of comma separated numbers', () => {
   expect(add("1")).toBe(1); 
   expect(add("1,5")).toBe(6);
 });
 
 test('should handle any amount of integers', () => {
   expect(add("1,0,1,0,2,3,4,5,6,7,10")).toBe(39); 
 });
 
 test('should handle multiple subsequent commans', () => {
   expect(add("1,0,1,0,2,,,3,4,5,6,7,,10")).toBe(39); 
 });
