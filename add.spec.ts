import add  from './add';

 test('should handle empty string', () => {
    expect(add("")).toBe(0);
 });
 
 test('should handle string of comma separated numbers', () => {
   expect(add("1")).toBe(1); 
   expect(add("1,5")).toBe(6);
 });
