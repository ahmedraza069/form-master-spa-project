

const Simpleform = () => {
    const handleSubmit = e =>{
        e.preventDefault();
        console.log(e.target.name.value);
        console.log('form submit');
    }
    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input type="text" name="name" />
                
                <br />
                <input type="email" name="email" />
                <br />
              <input type="submit" value="Submit" />
            </form>
        </div>
    );
};

export default Simpleform;