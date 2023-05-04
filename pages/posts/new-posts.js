import { useForm } from "react-hook-form"
import { Form, Button } from "react-bootstrap"
import axios from "axios"

export default function NewPost() {
    const { register, handleSubmit } = useForm()

    const onSubmit = async (data) => {
        try {
            const response = await axios.post("/api/posts", data)
            console.log(response.data)
        } catch (error) {
            console.error(error)
        }
    }

    return (
        <Form onSubmit={handleSubmit(onSubmit)}>
            <Form.Group controlId="formName">
                <Form.Label>Name</Form.Label>
                <Form.Control
                    name="name"
                    {...register("name", {
                        required: "Please enter name",
                    })}
                />
            </Form.Group>

            <Form.Group controlId="formCategory">
                <Form.Label>Category</Form.Label>
                <Form.Control
                    name="category"
                    {...register("name", {
                        required: "Please enter name",
                    })}
                />
            </Form.Group>

            <Form.Group controlId="formImage">
                <Form.Label>Image URL</Form.Label>
                <Form.Control
                    name="image"
                    {...register("name", {
                        required: "Please enter name",
                    })}
                />
            </Form.Group>

            <Form.Group controlId="formPrice">
                <Form.Label>Price</Form.Label>
                <Form.Control
                    name="price"
                    type="number"
                    {...register("name", {
                        required: "Please enter name",
                    })}
                />
            </Form.Group>

            <Form.Group controlId="formContact">
                <Form.Label>Contact</Form.Label>
                <Form.Control
                    name="contact"
                    type="number"
                    {...register("name", {
                        required: "Please enter name",
                    })}
                />
            </Form.Group>

            <Form.Group controlId="formDescription">
                <Form.Label>Description</Form.Label>
                <Form.Control
                    name="description"
                    as="textarea"
                    rows={3}
                    {...register("name", {
                        required: "Please enter name",
                    })}
                />
            </Form.Group>

            <Button variant="primary" type="submit">
                Submit
            </Button>
        </Form>
    )
}
